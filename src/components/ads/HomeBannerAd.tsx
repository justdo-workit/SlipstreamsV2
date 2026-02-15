export function HomeBannerAd() {
    return (
        <div className="w-full bg-black py-6 flex justify-center items-center">
            <iframe
                src="/ads/home-banner-ad.html"
                width="320"
                height="50"
                className="border-0 overflow-hidden"
                title="Advertisement"
                scrolling="no"
            />
        </div>
    );
}
