'use client';

import { useEffect, useRef } from 'react';

interface AdProps {
    adKey: string;
    width: number;
    height: number;
    className?: string; // Add className support
}

export function SafeAdFrame({ adKey, width, height, className }: AdProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            const doc = iframe.contentWindow?.document;
            if (doc) {
                // Clear existing content to prevent duplicates if key changes (unlikely but safe)
                doc.open();
                doc.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <style>
                            body { 
                                margin: 0; 
                                padding: 0; 
                                display: flex; 
                                justify-content: center; 
                                align-items: center; 
                                background: transparent; 
                                overflow: hidden;
                            }
                        </style>
                    </head>
                    <body>
                        <script type="text/javascript">
                            atOptions = {
                                'key' : '${adKey}',
                                'format' : 'iframe',
                                'height' : ${height},
                                'width' : ${width},
                                'params' : {}
                            };
                        </script>
                        <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
                    </body>
                    </html>
                `);
                doc.close();
            }
        }
    }, [adKey, width, height]);

    return (
        <div className={className} style={{ width, height }}>
            <iframe
                ref={iframeRef}
                width={width}
                height={height}
                style={{ border: 'none', overflow: 'hidden', display: 'block' }}
                scrolling="no"
                title={`Ad ${adKey}`}
            />
        </div>
    );
}
