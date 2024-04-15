'use client';

import MyModal from '@/components/modal';
import { HiOutlineShare } from 'react-icons/hi2';
import { Button } from '@/app/ui/button';
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
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
        <div className="mb-3 grid justify-items-end">
            <MyModal
                btnText={
                    <>
                        <HiOutlineShare className="mr-2 h-[18px] w-[18px]" />
                        <span>Share</span>
                    </>
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

                    <Button onClick={handleClick}>{btnText}</Button>
                </div>
            </MyModal>
        </div>
    );
}
