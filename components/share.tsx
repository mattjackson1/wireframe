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

export default function Share() {
    const pathname = usePathname();

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
        </MyModal>
    );
}
