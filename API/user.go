package main

import (
	"github.com/google/uuid"
)

// ensure User implements Node
var _ Node = (*User)(nil)

type User struct {
	Id    uuid.UUID      `json:"id"`
	Links []*Link        `json:"links"`
	Meta  map[string]any `json:"meta"`
}

func (u User) GetId() uuid.UUID {
	return u.Id
}

func (u User) GetLinks() []*Link {
	return u.Links
}

func (u User) GetMeta() map[string]any {
	return u.Meta
}
