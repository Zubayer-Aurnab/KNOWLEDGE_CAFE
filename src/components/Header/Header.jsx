import profile from '../../assets/img/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-4'>
            <h1 className='text-4xl  font-bold'>Knowledge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;