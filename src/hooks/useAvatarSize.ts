import { useState, useEffect, useRef } from 'react';

export const useAvatarSize = () => {
    const contentColumnRef = useRef<HTMLDivElement>(null);
    const [avatarSize, setAvatarSize] = useState<number>(250);

    useEffect(() => {
        const updateAvatarSize = (): void => {
            if (contentColumnRef.current) {
                const newSize = contentColumnRef.current.offsetHeight;
                setAvatarSize(newSize);
            }
        };

        updateAvatarSize();
        window.addEventListener('resize', updateAvatarSize);

        const observer = new MutationObserver(updateAvatarSize);
        if (contentColumnRef.current) {
            observer.observe(contentColumnRef.current, { childList: true, subtree: true, attributes: true });
        }

        return () => {
            window.removeEventListener('resize', updateAvatarSize);
            observer.disconnect();
        };
    }, []);

    return { contentColumnRef, avatarSize };
}; 