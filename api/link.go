package main

import (
	"github.com/google/uuid"
)

type Link struct {
	Id    uuid.UUID      `json:"id"`
	Nodes []Node         `json:"nodes"`
	Meta  map[string]any `json:"meta"`
}

func (l Link) GetId() uuid.UUID {
	return l.Id
}

func (l Link) GetNodes() []Node {
	return l.Nodes
}

func (l Link) GetMeta() map[string]any {
	return l.Meta
}

type Node interface {
	GetId() uuid.UUID
}
