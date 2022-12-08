import { Carousel } from 'antd';

const text1 = `This is a over hyped, and not worth the time and money spent to reach here. It used to be called the “Paris of the East” when the British settled here. But everything is destroyed now.

The only good place here is a beach that is on the other side. You will need to climb down and up a lot of steps to get there.
`;
const text2 = `It was a perfect location for family fun, the erstwhile Ross Island has all the history of a mini Paris, albeit at the cost of all Indian labour and is an example of the British opulence over poverty stricken India. Perfect for taking pics and the picturesque light house was delightful. We took the buggy as we were a large family with kids. There are deer and peacocks too.
`;
const Choose = () => {
    
    return (
        <Carousel autoplay>
        <div>
          <h3 className='w-1/2 mx-auto' >{text1}</h3>
        </div>
        <div>
          <h3 className='w-1/2 mx-auto'>{text2}</h3>
          <h3 className='w-1/2 mx-auto justify-end'>Sangeetha S</h3>
        </div>
        <div>
          <h3 className='w-1/2 mx-auto'>{text2}</h3>
        </div>
        <div>
          <h3 className='w-1/2 mx-auto'>{text2}</h3>
        </div>
      </Carousel>
    );
};

export default Choose;