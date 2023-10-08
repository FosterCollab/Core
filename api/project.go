package main

import (
	"github.com/google/uuid"
)

// ensure Project implements Node
var _ Node = (*Project)(nil)

type Project struct {
	Id    uuid.UUID      `json:"id"`
	Links []*Link        `json:"links"`
	Meta  map[string]any `json:"meta"`
}

func (p Project) GetId() uuid.UUID {
	return p.Id
}

func (p Project) GetLinks() []*Link {
	return p.Links
}

func (p Project) GetMeta() map[string]any {
	return p.Meta
}
