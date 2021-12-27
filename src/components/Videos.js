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
                    loader={<h3 style={{ textAlign: 'center' }}>Loading...</h3>}
                    // endMessage={
                    //     <p style={{ textAlign: 'center' }}>
                    //         <b>Yay! You have seen it all</b>
                    //     </p>
                    // }
                    next={() => setpage(page + 8)}
                >
                    {videos.map((el) =>
                        el.noq > 0 ? (
                            // url set korar passapasi to te objakare data o pathate pari tahole oi specific page theke data recieve koraow jabe history.push diye , so state url e 2 vabe pathano jai to or history.push 2 jaigai e obj akare pass kore history diye recieve korte hoi
                            <Link
                                to={{
                                    pathname: `/quiz/${el.youtubeID}`,
                                    // BUG -> to parameter e state e data pathano jacee na v5 e
                                    data: {
                                        title: el.title,
                                    },
                                }}
                                key={el.youtubeID}
                            >
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
