export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center mb-14 sm:mb-16">
            <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text inline-block"
                style={{ fontFamily: "'Outfit', sans-serif" }}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
