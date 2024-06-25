import QRCode from 'react-qr-code';

interface QRCodeProps {
    className?: string; // Optional string
    url: string;
}

export default function QRCodeGen({ className, url }: QRCodeProps) {
    return <QRCode value={url} size={250} className={className} />;
}
