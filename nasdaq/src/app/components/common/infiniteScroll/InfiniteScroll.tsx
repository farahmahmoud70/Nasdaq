import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const InfiniteScrollWrapper = styled.div`
width:100%;
height:100%;
overflow-y:auto;
`

export type Props = {
    onBottomHit: () => void;
    isLoading: boolean;
    hasMoreData: boolean;
    loadOnMount: boolean;
    children: any
};

const isBottom = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) {
        return false;
    }
    
    return Math.round(ref.current.scrollTop + ref.current.clientHeight) >= ref.current.scrollHeight;
}

const InfiniteScroll = ({
    onBottomHit,
    isLoading,
    hasMoreData,
    loadOnMount,
    children,
}: Props) => {
    const [initialLoad, setInitialLoad] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loadOnMount && initialLoad) {
            onBottomHit();
            setInitialLoad(false);
        }
    }, [loadOnMount, initialLoad]);

    useEffect(() => {
        const element = contentRef.current
        if (!element) return;

        const onScroll = () => {
            if (!isLoading && hasMoreData && isBottom(contentRef)) {
                onBottomHit();
            }
        };

        element.addEventListener('scroll', onScroll);

        return () =>
            element.removeEventListener('scroll', onScroll)
    }, [isLoading, hasMoreData]);

    return <InfiniteScrollWrapper ref={contentRef}>{children}</InfiniteScrollWrapper>;
};

export default InfiniteScroll