"use client"

/**
 * Robust, premium loader component.
 * Uses inline keyframes via a style tag to ensure it works even if Tailwind config is restricted.
 */
export default function Loader({ fullPage = false }: { fullPage?: boolean }) {
    const containerClasses = fullPage 
        ? "fixed inset-0 z-[9999] bg-[#0B1E36]/80 backdrop-blur-md flex flex-col items-center justify-center"
        : "flex flex-col items-center justify-center py-20 w-full gap-5";

    return (
        <div className={containerClasses}>
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin-premium {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin-custom {
                    animation: spin-premium 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
            `}} />
            
            <div className="relative w-12 h-12">
                {/* Background Ring */}
                <div className="absolute inset-0 border-[3px] border-sky-500/10 rounded-full" />
                {/* Active Spinner */}
                <div className="absolute inset-0 border-[3px] border-sky-500 border-t-transparent rounded-full animate-spin-custom shadow-[0_0_15px_rgba(14,165,233,0.2)]" />
            </div>
            
            <p className="text-[10px] font-black text-sky-500 uppercase tracking-[0.5em] animate-pulse">
                Loading
            </p>
        </div>
    )
}
