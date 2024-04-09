'use client';

import MyModal from '@/components/myModal';
import { ShareIcon } from '@heroicons/react/24/outline';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';
import { EmailIcon, FacebookIcon, XIcon, WhatsappIcon } from 'react-share';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Share() {
    const pathname = `${window.location.origin}${usePathname()}`;
    const [btnText, setbtnText] = useState('Copy page link');

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setbtnText('Copied page link');
    };

    return (
        <MyModal
            btnText={
                <div className="flex items-center">
                    <ShareIcon className="mr-2 h-[18px] w-[18px]" />
                    <span>Share</span>
                </div>
            }
            title="Share this page"
        >
            <div className="flex gap-2">
                <EmailShareButton url={pathname} subject="Look at this...">
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>

                <FacebookShareButton url={pathname}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <TwitterShareButton url={pathname}>
                    <XIcon size={32} round={true} />
                </TwitterShareButton>

                <WhatsappShareButton url={pathname}>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>

                <button
                    onClick={handleClick}
                    className="rounded bg-blue-100 px-4 py-2 text-sm text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    {btnText}
                </button>

                {}
            </div>
        </MyModal>
    );
}
