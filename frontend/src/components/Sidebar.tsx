import { Flex, Tooltip, Divider } from "@mantine/core";
import { ReactNode, useState } from "react";

function SidebarBtn({ children, label, isOpen }: { children: ReactNode, label: string, isOpen: boolean }) {
    return (
        <div className="w-full flex justify-center">
            {isOpen ? (
                <div className={`flex gap-2 p-2 w-[90%] hover:bg-gray-200 hover:cursor-pointer rounded-md`}>
                    {children}
                </div>
            ) : (
                <Tooltip withArrow label={label} position="right">
                    <div className={`flex justify-center p-2 hover:bg-gray-300 hover:cursor-pointer rounded-md w-[80%]`}>
                        {children}
                    </div>
                </Tooltip>
            )}
        </div>
    );
}

function SidebarToggle({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) {
    return (
        <Flex
            align="center"
            className="w-full mt-3.5 cursor-pointer justify-center"
            onClick={onToggle}
        >
            {isOpen ? (
                <>
                    <div className="flex-1 ml-6 text-xl">Echoscope</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left-open w-5 h-5 mr-2">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M9 3v18"></path>
                        <path d="m16 15-3-3 3-3"></path>
                    </svg>
                </>
            ) : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left-open w-5 h-5">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M9 3v18"></path>
                        <path d="m14 9 3 3-3 3"></path>
                    </svg>
                </>
            )}
        </Flex>
    );
}

function SidebarLink({ label, icon, isOpen }: { label: string, icon: JSX.Element, isOpen: boolean }) {
    return (
        <SidebarBtn label={label} isOpen={isOpen}>
            {icon}
            <span className="text-sm">{isOpen ? label : ''}</span>
        </SidebarBtn>
    );
}

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Flex
            direction="column"
            align={isOpen ? 'flex-start' : 'center'}
            gap="12"
            className={`fixed top-14 left-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-14'}`}
            style={{
                transitionProperty: 'width, opacity',
                opacity: isOpen ? 1 : 0.7,
            }}
        >
            <SidebarToggle isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />

            <div className="w-full">
                <Divider />
            </div>

            <SidebarLink
                label="Monitor"
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>}
                isOpen={isOpen}
            />

            <SidebarLink
                label="Reports"
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>}
                isOpen={isOpen}
            />

            <SidebarLink
                label="Overview"
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>}
                isOpen={isOpen}
            />

            <SidebarLink
                label="Team"
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>}
                isOpen={isOpen}
            />
        </Flex>
    );
}
