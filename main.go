package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/gin-gonic/gin"
)

func main() {
	
	router := gin.Default()

	// Route for uploading files
	router.POST("/upload", uploadFile)

	// Start the server
	router.Run(":8080")
}

func uploadFile(c *gin.Context) {
	// Get the file from the request
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No file uploaded"})
		return
	}

	// Open the file for reading
	src, err := file.Open()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to open file"})
		return
	}
	defer src.Close()

	// Initialize Cloudinary
	cld, err := cloudinary.NewFromParams("your-cloud-name", "your-api-key", "your-api-secret")
	if err != nil {
		log.Fatalf("Failed to initialize Cloudinary: %v", err)
	}

	// Upload file to Cloudinary
	uploadResult, err := cld.Upload.Upload(c, src, uploader.UploadParams{Folder: "your-folder-name"})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to upload to Cloudinary"})
		return
	}

	// Return the Cloudinary URL of the uploaded file
	c.JSON(http.StatusOK, gin.H{"url": uploadResult.SecureURL})
}
