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
                For clarity, we only plot 10 results at a time. You can change the ordering and view the next 10 results by selecting &quot;Next
                page&quot;
            </p>
            <h2>The map</h2>
            <p>Set the centre of the map as your currect location, select the "Center on my Current Location" button</p>
            <p>As you zoom and drag the map, your results will change to reflect this</p>
            <h2>Draw search area</h2>
            <p>You can draw a box on the map to filter your results by location</p>
            <h2>Measure</h2>
            <p>You can easily get distance measurements from the map, to give you some idea on scales</p>
        </Modal>
    );
}
