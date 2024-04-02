import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Navbar from './Navbar';

export default function Resume() {

    return (
        <div>
            <Navbar />
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="/img/OliviaOomenResume.pdf" />;
            </Worker>
        </div>
    )
}