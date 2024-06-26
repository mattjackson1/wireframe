'use client';

import Modal from '@/components/modal';
import { HiOutlineShare } from 'react-icons/hi2';
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { EmailIcon, FacebookIcon, XIcon, WhatsappIcon } from 'react-share';
import { FaLink } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Share() {
    const pathname = `${window.location.origin}${usePathname()}`;
    const [btnText, setbtnText] = useState<string>('Copy page link');

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setbtnText('Copied page link');
    };

    return (
        <Modal
            btnText={
                <>
                    <HiOutlineShare className="mr-2 h-[18px] w-[18px]" />
                    <span>Share</span>
                </>
            }
            title="Share this page"
        >
            <div className="flex flex-col gap-2">
                <EmailShareButton url={pathname} className="mb-2 flex items-center gap-3" subject="Look at this...">
                    <EmailIcon size={32} round={true} /> Share by Email
                </EmailShareButton>

                <FacebookShareButton url={pathname} className="mb-2 flex items-center gap-3">
                    <FacebookIcon size={32} round={true} /> Share on Facebook
                </FacebookShareButton>

                <WhatsappShareButton url={pathname} className="mb-2 flex items-center gap-3">
                    <WhatsappIcon size={32} round={true} /> Share on WhatsApp
                </WhatsappShareButton>

                <TwitterShareButton url={pathname} className="mb-2 flex items-center gap-3">
                    <XIcon size={32} round={true} /> Tweet
                </TwitterShareButton>

                <button className="flex items-center gap-3" onClick={handleClick}>
                    <span className="h-[32px] w-[32px] content-center rounded-full bg-gray-300 align-middle">
                        <FaLink size={22} className="mx-auto" />
                    </span>
                    {btnText}
                </button>
            </div>
        </Modal>
    );
}
