import PropTypes from 'prop-types';


const Blog = ({ blog }) => {
    const { cvr, ttl, id, athr, athr_img, pst_dt, rd_tm, hashtags } = blog
    return (
        <div className='mb-11'>
            <img className='rounded-xl' src={cvr} alt="" />
            <div className='flex justify-between items-center mt-4 mb-4'>
                <div className='flex items-center gap-5'>
                    <img className='w-14 h-14 rounded-full' src={athr_img} alt="" />
                    <div>
                        <h3>{athr}</h3>
                        <p>{pst_dt}</p>
                    </div>
                </div>
                <div className='flex justify-center gap-2'>
                    <p>{rd_tm} min read</p>
                    <div>
                        <a href="asdsdsd"><i key={id} class="fa-regular fa-bookmark"></i></a>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{ttl}</h2>
            <div>
                <p className='mt-3'>
                    {
                        hashtags.map((hash,idx)=><span className='mr-2 hover:text-blue-700' key={idx}><a href="">{hash}</a></span>)
                    }
                </p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;