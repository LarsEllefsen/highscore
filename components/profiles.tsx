import Image from 'next/image';

export const profiles = ({ Leaderboard }: any) => {
  return <div id='profile'>{Item(Leaderboard)}</div>;
};

const Item = (data: any) => {
  return (
    <>
      {data.Leaderboard.map((value: any, index: any) => (
        <div className='flex' key={index}>
          <div className='item'>
            <div className='info'>
              <h3 className='name text-dark'>{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div className='item'>
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
