import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Typography, Box } from "@mui/material";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewport({ content, maximized, onLoad }) {
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const containerRef = useRef(null);

    // Resize handler
    useEffect(() => {
        const updateWidth = () => {
            setOpacity(0);
            setTimeout(() => {
                if (containerRef.current) {
                    setPageWidth(containerRef.current.offsetWidth);
                    setOpacity(1);
                }
            }, 500);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [maximized]);

    const handleLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    useEffect(() => {
        if (pageWidth != 0 && numPages != null) {
            onLoad(true);
        }
    }, [pageWidth, numPages]);

    return (
        <Box
            ref={containerRef}
            sx={{
                width: "100%",
                maxHeight: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 0,
                opacity: opacity,
                transition: "opacity 0.5s ease",
            }}
        >
            {content.pdfUrl && (
                <Document
                    file={`/pdf/${content.pdfUrl}`}
                    onLoadSuccess={handleLoadSuccess}
                    loading={<Typography>Loading PDF...</Typography>}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            userSelect: maximized ? "auto" : "none",
                        }}
                    >
                        {Array.from(new Array(numPages), (_, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={pageWidth}
                            />
                        ))}
                    </Box>
                </Document>
            )}
        </Box>
    );
}
