// import { Box } from "@chakra-ui/react";
// import { Document, Page } from 'react-pdf';
// const CV = () => {
//   return (
//     // <Box
//     //   width="100%"
//     //   height="100vh" // Full viewport height
//     //   display="flex"
//     //   justifyContent="center" // Center horizontally
//     //   alignItems="center" // Center vertically
//     //   overflow="hidden" // Hide overflow if necessary
//     // >
//       {/* <iframe
//         src="/CV.pdf#navpanes=0&scrollbar=0"
//         style={{
//           width: "100%",
//           height: "100%",
//           border: "none",
//         }}
//       /> */}
//       <Document file="/CV.pdf">
//       <Page />
//       </Document>
//     // </Box>
//   );
// };

'use client';
import { useEffect, useRef, useState } from 'react';
import { Button, Box, Spinner } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const CV = () => {
  const canvasRef = useRef(null)
  const renderTaskRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let isCancelled = false;

    (async function () {
      // Import pdfjs-dist dynamically for client-side rendering.
      const pdfJS = await import('pdfjs-dist/build/pdf');

      // Set up the worker.
      pdfJS.GlobalWorkerOptions.workerSrc =
        window.location.origin + '/pdf.worker.min.mjs';

      // Load the PDF document.
      const pdf = await pdfJS.getDocument('/CV.pdf').promise;

      // Get the first page.
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      // Prepare the canvas.
      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Ensure no other render tasks are running.
      if (renderTaskRef.current) {
        await renderTaskRef.current.promise;
      }

      // Render the page into the canvas.
      const renderContext = { canvasContext, viewport }
      const renderTask = page.render(renderContext)

      // Store the render task.
      renderTaskRef.current = renderTask

      // Wait for rendering to finish.
      try {
        await renderTask.promise;
        if (!isCancelled) {
          setIsLoaded(true); // Mark as loaded once rendering is complete.
        }
      } catch (error) {
        if (error.name === 'RenderingCancelledException') {
          console.log('Rendering cancelled.');
        } else {
          console.error('Render error:', error);
        }
      }
    })();

    // Cleanup function to cancel the render task if the component unmounts.
    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, []);

  return (
    <Layout title="CV💻">
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        <canvas ref={canvasRef} style={{ width: '100%' }} />
        {isLoaded ? (
          <Button
            as="a"
            href="/CV.pdf"
            download="CV.pdf"
            colorScheme="blue"
            size="md"
            mb={4}
            mt={1}
          >
            Download CV
          </Button>
        ) : (
			<Spinner
			size="xl"
			position="absolute"
			left="50%"
			top="50%"
			ml="calc(0px - var(--spinner-size) / 2)"
			mt="calc(0px - var(--spinner-size))"
		  />
        )}
      </Box>
    </Layout>
  );
};

export default CV;