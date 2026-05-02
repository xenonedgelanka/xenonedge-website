"use client"

export default function Loader({ fullPage = false }: { fullPage?: boolean }) {
    const containerClasses = fullPage 
        ? "fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        : "flex flex-col items-center justify-center py-20 w-full gap-5";

    return (
        <div className={containerClasses}>
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin-simple {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin-simple {
                    animation: spin-simple 0.8s linear infinite;
                }
            `}} />
            
            <div className="relative w-10 h-10">
                {/* Background Ring */}
                <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
                {/* Active Spinner */}
                <div className="absolute inset-0 border-4 border-sky-500 border-t-transparent rounded-full animate-spin-simple" />
            </div>
            
            <p className="text-sm font-medium text-slate-500 mt-4 tracking-wide">
                Loading...
            </p>
        </div>
    )
}
