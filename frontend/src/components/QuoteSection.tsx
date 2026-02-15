"use client"
import { motion } from 'framer-motion'
import {
    FiTrendingUp, FiCpu, FiZap, FiGlobe, FiCode, FiDatabase, FiSmartphone,
    FiCloud, FiShield, FiActivity, FiHardDrive, FiLayers, FiBox, FiTerminal,
    FiMonitor, FiGrid, FiServer, FiToggleRight, FiShare2, FiWind, FiTriangle,
    FiEye, FiCommand, FiGitBranch, FiGitCommit, FiGitMerge, FiGitPullRequest,
    FiHash, FiKey, FiLock, FiSearch, FiSettings, FiSliders, FiTablet, FiTag,
    FiTarget, FiTool, FiType, FiUnlock, FiUsers, FiWifi, FiPocket, FiAnchor,
    FiAperture, FiCast, FiCrosshair, FiMaximize, FiMinimize
} from 'react-icons/fi'

const IlluminatiIcon = ({ size }: any) => (
    <div className="relative flex items-center justify-center">
        <FiEye size={size} strokeWidth={1.2} />
    </div>
)

const FloatingIcon = ({ Icon, color, size, top, left, delay, duration, zIndex = 0, centered = false }: any) => (
    <motion.div
        className={`absolute ${color} pointer-events-none opacity-60`}
        style={{
            top,
            left,
            zIndex,
            margin: centered ? `-${size / 2}px 0 0 -${size / 2}px` : undefined
        }}
        animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.05, 1],
        }}
        transition={{
            y: { repeat: Infinity, duration: duration, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: duration * 1.5, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: duration * 2, ease: "easeInOut" },
        }}
    >
        <Icon size={size} />
    </motion.div>
)

export default function QuoteSection() {
    const icons = [
        // The Illuminati Eye - Master Center
        { Icon: IlluminatiIcon, color: 'text-slate-900', size: 40, top: '50%', left: '50%', delay: 0, duration: 12, zIndex: 0, centered: true },

        // Matrix Grid Row -40% (Far Top)
        { Icon: FiCommand, color: 'text-slate-900', size: 28, top: '-40%', left: '0%', delay: 0.1, duration: 6, centered: true },
        { Icon: FiGitBranch, color: 'text-slate-900', size: 28, top: '-40%', left: '20%', delay: 0.2, duration: 5.5, centered: true },
        { Icon: FiHash, color: 'text-slate-900', size: 28, top: '-40%', left: '40%', delay: 0.3, duration: 6.5, centered: true },
        { Icon: FiCode, color: 'text-slate-900', size: 28, top: '-40%', left: '60%', delay: 0.4, duration: 5.8, centered: true },
        { Icon: FiTerminal, color: 'text-slate-900', size: 28, top: '-40%', left: '80%', delay: 0.5, duration: 7, centered: true },
        { Icon: FiCpu, color: 'text-slate-900', size: 28, top: '-40%', left: '100%', delay: 0.6, duration: 6.2, centered: true },

        // Matrix Grid Row -20% (Upper Top)
        { Icon: FiSearch, color: 'text-slate-900', size: 28, top: '-20%', left: '10%', delay: 0.7, duration: 5.9, centered: true },
        { Icon: FiLock, color: 'text-slate-900', size: 28, top: '-20%', left: '30%', delay: 0.8, duration: 6.8, centered: true },
        { Icon: FiGitPullRequest, color: 'text-slate-900', size: 28, top: '-20%', left: '50%', delay: 0.9, duration: 6.1, centered: true },
        { Icon: FiDatabase, color: 'text-slate-900', size: 28, top: '-20%', left: '70%', delay: 1.0, duration: 5.6, centered: true },
        { Icon: FiZap, color: 'text-slate-900', size: 28, top: '-20%', left: '90%', delay: 1.1, duration: 6.4, centered: true },

        // Matrix Grid Row 0% (Near Top)
        { Icon: FiSettings, color: 'text-slate-900', size: 28, top: '0%', left: '-5%', delay: 1.2, duration: 7.2, centered: true },
        { Icon: FiMonitor, color: 'text-slate-900', size: 28, top: '0%', left: '25%', delay: 1.3, duration: 5.9, centered: true },
        { Icon: FiLayers, color: 'text-slate-900', size: 28, top: '0%', left: '75%', delay: 1.4, duration: 6.3, centered: true },
        { Icon: FiShield, color: 'text-slate-900', size: 28, top: '0%', left: '105%', delay: 1.5, duration: 6.5, centered: true },

        // Left Vertical Column
        { Icon: FiSliders, color: 'text-slate-900', size: 28, top: '25%', left: '-10%', delay: 1.6, duration: 5.7, centered: true },
        { Icon: FiWifi, color: 'text-slate-900', size: 28, top: '50%', left: '-15%', delay: 1.7, duration: 6.9, centered: true },
        { Icon: FiTool, color: 'text-slate-900', size: 28, top: '75%', left: '-10%', delay: 1.8, duration: 5.4, centered: true },

        // Right Vertical Column
        { Icon: FiTarget, color: 'text-slate-900', size: 28, top: '25%', left: '110%', delay: 1.9, duration: 6.1, centered: true },
        { Icon: FiCloud, color: 'text-slate-900', size: 28, top: '50%', left: '115%', delay: 2.0, duration: 5.8, centered: true },
        { Icon: FiAperture, color: 'text-slate-900', size: 28, top: '75%', left: '110%', delay: 0.1, duration: 6.2, centered: true },

        // Matrix Grid Row 100% (Near Bottom)
        { Icon: FiGitMerge, color: 'text-slate-900', size: 28, top: '100%', left: '-5%', delay: 0.2, duration: 6.6, centered: true },
        { Icon: FiUsers, color: 'text-slate-900', size: 28, top: '100%', left: '25%', delay: 0.3, duration: 5.4, centered: true },
        { Icon: FiHardDrive, color: 'text-slate-900', size: 28, top: '100%', left: '75%', delay: 0.4, duration: 6.7, centered: true },
        { Icon: FiSmartphone, color: 'text-slate-900', size: 28, top: '100%', left: '105%', delay: 0.5, duration: 5.3, centered: true },

        // Matrix Grid Row 120% (Lower Bottom)
        { Icon: FiUnlock, color: 'text-slate-900', size: 28, top: '120%', left: '10%', delay: 0.6, duration: 6.9, centered: true },
        { Icon: FiGitCommit, color: 'text-slate-900', size: 28, top: '120%', left: '30%', delay: 0.7, duration: 5.1, centered: true },
        { Icon: FiActivity, color: 'text-slate-900', size: 28, top: '120%', left: '50%', delay: 0.8, duration: 6.3, centered: true },
        { Icon: FiBox, color: 'text-slate-900', size: 28, top: '120%', left: '70%', delay: 0.9, duration: 5.8, centered: true },
        { Icon: FiGlobe, color: 'text-slate-900', size: 28, top: '120%', left: '90%', delay: 1.0, duration: 7.1, centered: true },

        // Matrix Grid Row 140% (Far Bottom)
        { Icon: FiTablet, color: 'text-slate-900', size: 28, top: '140%', left: '0%', delay: 1.1, duration: 6.4, centered: true },
        { Icon: FiType, color: 'text-slate-900', size: 28, top: '140%', left: '20%', delay: 1.2, duration: 5.7, centered: true },
        { Icon: FiTag, color: 'text-slate-900', size: 28, top: '140%', left: '40%', delay: 1.3, duration: 6.6, centered: true },
        { Icon: FiPocket, color: 'text-slate-900', size: 28, top: '140%', left: '60%', delay: 1.4, duration: 5.4, centered: true },
        { Icon: FiAnchor, color: 'text-slate-900', size: 28, top: '140%', left: '80%', delay: 1.5, duration: 6.2, centered: true },
        { Icon: FiShare2, color: 'text-slate-900', size: 28, top: '140%', left: '100%', delay: 1.6, duration: 5.9, centered: true },

        // Extra Scattered Rows for density
        { Icon: FiCast, color: 'text-slate-900', size: 24, top: '15%', left: '5%', delay: 1.7, duration: 7.5, centered: true },
        { Icon: FiMaximize, color: 'text-slate-900', size: 24, top: '15%', left: '95%', delay: 1.8, duration: 6.8, centered: true },
        { Icon: FiMinimize, color: 'text-slate-900', size: 24, top: '85%', left: '5%', delay: 1.9, duration: 7.2, centered: true },
        { Icon: FiCrosshair, color: 'text-slate-900', size: 24, top: '85%', left: '95%', delay: 2.0, duration: 6.5, centered: true },
    ]

    return (
        <section className="bg-[#f1f5f9] py-48 relative overflow-hidden">
            {/* Premium Background Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Technical Dot Grid Style */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:48px_48px] opacity-80" />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Background Icons Layer - Static (no entry animation) */}
                <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
                    <div className="relative max-w-6xl mx-auto h-full">
                        {icons.map((item, i) => (
                            <FloatingIcon key={i} {...item} />
                        ))}
                    </div>
                </div>

                <motion.div
                    className="text-center max-w-4xl mx-auto relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Decorative quotes background */}
                    <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[12rem] text-slate-100 font-serif opacity-60 select-none pointer-events-none">
                        &ldquo;
                    </span>

                    <h2 className="relative z-10 text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight text-[var(--btn)]">
                        Business growth comes from strong ideas and teamwork. <br className="hidden md:block" />
                        <span className="text-sky-500 mt-2 block">
                            Together, we deliver outcomes.
                        </span>
                    </h2>

                </motion.div>
            </div>
        </section>
    )
}
