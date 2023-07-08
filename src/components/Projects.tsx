import React, {useState} from 'react';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Spacer } from './style'
const Projects = ({ projects }: any) => {
    const [view, setView] = useState("front");
    const [idx, setIdx] = useState(null)

    return (
        <Box sx={{ pt: 4 }}>
            <Typography variant="h2">Projects</Typography>
            <Spacer />
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                {projects.map((project, index) => (
                    <div key={index} style={{ background: "yellow", color: 'black', padding: '.5rem' }} >
                        {view === "back" && index === idx ? (
                            <div onMouseLeave={() => {
                                setView("front")
                                setIdx(index)
                            }}
                            style={{
                                height: "400px",
                                padding: '1rem',
                                textAlign: "justify",
                                textJustify: "inter-word",
                            }}>
                                {/* <h1>{project.title}</h1> */}
                                <Spacer />
                                <p>{project.description}</p>
                                <Spacer />
                                <div style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    color: "orange",
                                    gap: "1rem",
                                }}>
                                    {project.link.map(link => (
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div onMouseEnter={() => {
                                setView("back")
                                setIdx(index)
                            }}
                            style={{
                                height: "400px",
                                padding: '1rem',
                                // textAlign: "justify",
                                // textJustify: "inter-word",
                            }}>
                                <h1>{project.title}</h1>
                                <Spacer />
                                {project.tech.map(tech => (
                                    <>
                                        <Spacer />
                                        <Typography variant={"h6"} style={{text: "bold"}}>{tech.title}</Typography>
                                        <p>{tech.description}</p>
                                    </>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </Masonry>
        </Box>
    );
};
export default Projects;