import Modal from '@/components/modal';
import { FaRegCircleQuestion } from 'react-icons/fa6';

export default function HelpButton() {
    return (
        <Modal
            btnText={
                <>
                    <FaRegCircleQuestion className="mr-2 h-[18px] w-[18px]" />
                    <span>Help</span>
                </>
            }
            title="Help with searching for services"
        >
            <h2>Limited results</h2>
            <p>
                For clarity, we only plot 10 results at a time. You can change the ordering and view the next 10 results by selecting &ldquo;Next
                page&rdquo;
            </p>
            <h2>The map</h2>
            <p>Set the centre of the map as your currect location, select the &ldquo;Center on my Current Location&rdquo; button</p>
        </Modal>
    );
}
