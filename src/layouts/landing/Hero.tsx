import { ReactNode } from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Button from '../../components/Button/Button';

const BackgroundImage = () => (
    <div className="absolute left-0 top-0 -z-10 h-screen w-screen opacity-90">
        <Image src="/pages/index/bg.png" layout="fill" objectFit="cover" />
    </div>
);

const ButtonGroup = (props: {children: ReactNode}) => (
    <ul className="my-4 flex gap-4">
        {props.children}
    </ul>
);

const Hero = () => {
    const router = useRouter();

    return (
        <Section className="flex h-screen flex-col justify-center bg-black/50 bg-gradient-to-bl from-primary/30 to-secondary">
            <BackgroundImage />
            <Container className="h-144 justify-center" display="flex flex-col">
                <div className="max-w-prose">
                    <h4 className="font-normal leading-4 text-primary">FlyByWire Simulations</h4>
                    <Image src="/pages/index/A32NX-Color-Dark.svg" width={310} height={131} />
                    <p className="max-w-xl">
                        The leading free and open-source community aiming for high fidelity aircraft in Microsoft Flight Simulator,
                        fly with our in-depth systems or put your skills to the test by contributing to the project.
                    </p>
                    <ButtonGroup>
                        <Button label="Download" theme="primary" onClick={() => router.push('/downloads')} />
                    </ButtonGroup>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
