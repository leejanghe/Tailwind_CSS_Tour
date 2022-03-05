import { cls } from "../libs/utils";

interface LayoutProps{
    title?: string;
    canGoBack?: boolean;
    hasTabs?: boolean;
    children?: React.ReactNode;
}

export default function Layout({
    title,
    canGoBack,
    hasTabs,
    children,
}: LayoutProps) {
    return <div>
        <div className="bg-white w-full text-lg font-medium py-3 fixed text-gray-700 border-b top-0 flex items-center justify-center">
        {title ? <span>{title}</span>:null}
        </div>
        <div className="py-10">
        {children}
        </div>
        <div className={cls("pt-16", hasTabs ?"pb-16":"")}>
        {hasTabs ? <nav
        className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 p5-3 flex justify-between items-center"
        ></nav>:null}
        </div>
        
    </div>
}