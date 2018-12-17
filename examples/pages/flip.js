import React from 'react';
import FlipMove from 'react-flip-move';
import LazyLoad from '../../src/';

const Placeholder = () => {
  return (
    <div
      style={{
        height: '200px',
        margin: '10px 0',
        paddingTop: '80px',
      }}
    />
  );
};

const shuffle = arr => {
  // Tried to scroll, but doesn't work
  // setTimeout(() => window.scrollTo(0, 100), 0);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
  // setTimeout(() => window.scrollTo(0, 0), 0);
};

export default class Flip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_3113.jpg',
        'https://images.dog.ceo/breeds/cattledog-australian/IMG_1418.JPG',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1559.jpg',
        'https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_4303.jpg',
        'https://images.dog.ceo/breeds/papillon/n02086910_2335.jpg',
        'https://images.dog.ceo/breeds/pekinese/n02086079_10951.jpg',
        'https://images.dog.ceo/breeds/schipperke/n02104365_10598.jpg',
        'https://images.dog.ceo/breeds/leonberg/n02111129_2785.jpg',
        'https://images.dog.ceo/breeds/setter-english/n02100735_7940.jpg',
        'https://images.dog.ceo/breeds/coonhound/n02089078_4186.jpg',
      ],
    };
  }

  shuffle(images) {
    this.setState({ images: shuffle(images) });
  }

  render() {
    const { images } = this.state;
    const style = {
      position: 'relative',
      height: '200px',
      width: '200px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: '20px',
    };
    return (
      <div className="App">
        <button onClick={() => this.shuffle(images)}>Shuffle</button>
        <FlipMove typeName={null}>
          {images.map(img => (
            <LazyLoad key={img} placeholder={<Placeholder />} forceUpdate>
              <div
                style={{
                  ...style,
                  backgroundImage: `url(${img})`,
                }}
              />
            </LazyLoad>
          ))}
        </FlipMove>
      </div>
    );
  }
}
