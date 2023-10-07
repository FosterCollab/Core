package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"time"

	"github.com/lib/pq"
)

// import pq so driver gets plugged in.
var _ = pq.Error{}

const (
	dbName        = "fostercollab"
	tableUsers    = "users"
	tableGroups   = "groups"
	tableProjects = "projects"
	tableLinks    = "links"
)

type DataSource struct {
	db *sql.DB
}

func NewDataSource() (DataSource, error) {
	connStr := "user=postgres password=example sslmode=disable host=host.docker.internal"
	// Opening a driver typically will not attempt to connect to the database.
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		// This will not be a connection error, but a DSN parse error or
		// another initialization error.
		log.Fatal(err)
	}
	db.SetConnMaxLifetime(0)
	db.SetMaxIdleConns(50)
	db.SetMaxOpenConns(50)

	// check the connection
	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()
	err = db.PingContext(ctx)
	if err != nil {
		return DataSource{db}, fmt.Errorf("db down: %w", err)
	}

	return DataSource{db}, nil
}

func (ds DataSource) CreateDB() error {
	db := ds.db
	_, err := db.Exec("CREATE DATABASE " + dbName)
	if err != nil {
		return err
	}

	_, err = db.Exec("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
	if err != nil {
		return err
	}

	err = ds.createNodeTable(tableUsers)
	if err != nil {
		return err
	}

	err = ds.createNodeTable(tableGroups)
	if err != nil {
		return err
	}

	err = ds.createNodeTable(tableProjects)
	if err != nil {
		return err
	}

	err = ds.createLinkTable()
	if err != nil {
		return err
	}
	return nil
}

func (ds DataSource) createNodeTable(name string) error {
	_, err := ds.db.Exec("CREATE TABLE " + name + ` (
		id uuid DEFAULT uuid_generate_v4 (),
		meta json,
		PRIMARY KEY (id)
	);`)
	return err
}

func (ds DataSource) createLinkTable() error {
	_, err := ds.db.Exec("CREATE TABLE " + tableLinks + ` (
		id uuid DEFAULT uuid_generate_v4 (),
		meta json,
		PRIMARY KEY (id)
	);`)
	return err
}

func (ds DataSource) DeleteDB() error {
	_, err := ds.db.Exec("DROP DATABASE " + dbName)
	if err != nil {
		return err
	}
	return nil
}
