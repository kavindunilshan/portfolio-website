import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const ProjectDialog = ({ openDialog, handleCloseDialog, selectedProject }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Auto-play for images every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (selectedProject && selectedProject.images.length > 0) {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
            }
        }, 3000); // Change image every 3 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [selectedProject]);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
        );
    };

    return (
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
            {selectedProject && (
                <>
                    <DialogTitle>{selectedProject.title}</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1" gutterBottom>
                            <strong>Description:</strong> {selectedProject.description}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Tech Stack:</strong> {selectedProject.techStack}
                        </Typography>
                        {selectedProject.githubFrontend && (
                            <Typography variant="body1">
                                <strong>Frontend Repo:</strong>{" "}
                                <a href={selectedProject.githubFrontend} target="_blank" rel="noopener noreferrer">
                                    {selectedProject.githubFrontend}
                                </a>
                            </Typography>
                        )}
                        {selectedProject.githubBackend && (
                            <Typography variant="body1">
                                <strong>Backend Repo:</strong>{" "}
                                <a href={selectedProject.githubBackend} target="_blank" rel="noopener noreferrer">
                                    {selectedProject.githubBackend}
                                </a>
                            </Typography>
                        )}
                        {selectedProject.link && (
                            <Typography variant="body1">
                                <strong>Live Demo:</strong>{" "}
                                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                    {selectedProject.link}
                                </a>
                            </Typography>
                        )}

                        {/* Image Slideshow */}
                        {selectedProject.images && selectedProject.images.length > 0 && (
                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt="Project Screenshot"
                                    style={{ maxWidth: '100%', maxHeight: '400px' }}
                                />
                                <div>
                                    <IconButton onClick={handlePrevImage}>
                                        <ArrowBack />
                                    </IconButton>
                                    <IconButton onClick={handleNextImage}>
                                        <ArrowForward />
                                    </IconButton>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </>
            )}
        </Dialog>
    );
};

export default ProjectDialog;