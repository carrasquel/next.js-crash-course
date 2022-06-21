import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();
    let newsId = router.query.newsId;
    console.log(newsId);

    return (
        <div>
            <h1>Detail Page</h1>
            <h2>{newsId}</h2>
        </div>
    )
}

export default DetailPage;