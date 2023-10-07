package main

import (

	// postgress driver
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	v1 := router.Group("/api/v1")

	// /api/v1/user/<userId>
	v1.GET("/user/:id", getUser)
	// /api/v1/user/<projectId>
	v1.GET("/project/:id", getProject)
	// /api/v1/user/<groupId>
	v1.GET("/group/:id", getGroup)

	v1.Run("localhost:8080")


}

// getUser responds with information about the identified user.
func getUser(c *gin.Context) {
	id := c.Param("id")

	// TODO
}

// getProject responds with information about the identified project.
func getProject(c *gin.Context) {
	id := c.Param("id")

	// TODO
}

// getGroup responds with information about the identified group.
func getGroup(c *gin.Context) {
	id := c.Param("id")

	// TODO
}
