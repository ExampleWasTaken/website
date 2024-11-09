import { NextPage } from 'next';
import { useState } from 'react';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';
import DownloadLinks from '../../components/Downloads/DownloadLinks';

const Downloads: NextPage = () => {
    const [showDirectDownloadWarning, setShowDirectDownloadWarning] = useState(false);
    const [showDirectDownloads, setShowDirectDownloads] = useState(false);

    return (
        <>
            <Section className="h-screen flex flex-col justify-center items-center bg-black bg-gradient-to-bl from-primary/30 to-secondary">
                <div className="flex items-center">
                    <Container>
                        <h4>Ready to fly?</h4>
                        <h1>Installer</h1>
                        <p className="max-w-prose">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eum consectetur voluptatum nihil ut quos dignissimos, officiis sapiente eius ipsa optio provident.
                            Squia corporis earum doloribus laboriosam voluptas molestias quam non quod eius.
                            {/* We have included many options to download our addons, you can use our custom and simple installer
                            to always keep your products up to date, or you can download using standalone installations. */}
                        </p>
                        <Button label="Download Installer" theme="primary" className="my-4" onClick={() => {}} />
                    </Container>

                    <Container>
                        <img alt="Installer" width={750} src="/pages/index/installerPreview.png" />
                    </Container>
                </div>
            </Section>
            <Section className="flex">
                <Container className="flex flex-col 2xl:flex-row gap-8 items-stretch text-dark">
                    <div className="max-w-prose">
                        <h2>Direct Download</h2>
                        <p className="pb-6">
                            We highly recommend you use our installer. It provides an easy way to update our products.
                        </p>
                        <p className="pb-6">
                            If you are facing download issues, please consider seeking support in our Discord Server.
                        </p>

                        <div className="flex gap-2.5 pb-3">
                            <Button label="Join Discord" theme="discord" />
                            <Button label="Download Installer" theme="secondary" />
                        </div>

                        {!showDirectDownloads && !showDirectDownloadWarning && (
                            <p className="text-sm underline italic cursor-pointer" onClick={() => setShowDirectDownloadWarning(true)}>Direct Downloads</p>
                        )}

                        {showDirectDownloadWarning && (
                            <>
                                <div className="flex flex-col gap-3 mt-8 border-l-8 border-l-red p-5 rounded bg-navy text-quasi-white">
                                    <p className="font-bold">Please note that outdated versions of our aircraft are not supported.</p>
                                    <p>We recommend you use our installer to stay up to date.</p>
                                    <Button label="Download Installer" theme="primary" />
                                </div>
                                <p className="mt-2 text-sm underline italic cursor-pointer" onClick={() => setShowDirectDownloads(true)}>Direct Downloads</p>
                            </>
                        )}

                        {showDirectDownloads && (
                            <>

                                <div className="flex flex-col gap-8 mt-8 border-t border-t-navy-dark">
                                    <DownloadLinks
                                        aircraft="A32NX"
                                        stableLink="https://github.com/flybywiresim/aircraft/releases/download/assets/stable/A32NX-stable.zip"
                                        devLink="https://github.com/flybywiresim/aircraft/releases/download/assets/master/A32NX-master.7z"
                                    />
                                    <DownloadLinks aircraft="A380X" stableLink="" devLink="" />
                                </div>
                            </>
                        )}
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Downloads;
