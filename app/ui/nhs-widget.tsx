export default function NHSWidget({ uid }: {uid: string}) {
    return (
        <section className="mt-4 p-3 bg-white rounded">
            <h2 className="mb-3">Access Your Local NHS Services</h2>
            <iframe
                src={`https://developer.api.nhs.uk/widgets/services/all/?uid=${uid}`}
                className="h-[26rem] w-full border-2 border-[#005eb8]"
                title="NHS - Find services"
                loading="lazy"
            >
            </iframe>
        </section>
    );
}