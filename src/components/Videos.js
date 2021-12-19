import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';

export default function Videos() {
    const [page, setpage] = useState(1);
    const { loading, error, videos, hasMore } = useVideoList(page);
    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll
                    className="infinite-scroll-component"
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => setpage(page + 8)}
                >
                    {videos.map((el) =>
                        el.noq > 0 ? (
                            <Link to="/quize" key={el.youtubeID}>
                                <Video questionNum={el.noq} title={el.title} id={el.youtubeID} />
                            </Link>
                        ) : (
                            <Video questionNum={el.noq} title={el.title} id={el.youtubeID} />
                        )
                    )}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div> No Data Found </div>}
            {error && <div> There Was an error! </div>}
            {loading && <div> Loading....</div>}
        </div>
    );
}
