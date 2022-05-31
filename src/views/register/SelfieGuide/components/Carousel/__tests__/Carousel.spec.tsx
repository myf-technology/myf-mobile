import { fireEvent, render } from '@testing-library/react-native';

import { Carousel } from '..';
import mockImages from '../carouselImages.mock';

const onScrollMock = jest.fn();

describe('<Carousel />', () => {
  it('Should run a function when passed to onScroll', () => {
    const { getByTestId } = render(
      <Carousel carouselImages={[]} onScroll={onScrollMock} />
    );

    const onScroll = getByTestId('onScroll');

    fireEvent.scroll(onScroll);

    expect(onScrollMock).toBeCalled();
  });
  it('Should render some images', () => {
    const { getAllByTestId } = render(
      <Carousel carouselImages={mockImages} onScroll={onScrollMock} />
    );
    const view = getAllByTestId('view');

    expect(view.length).toBe(4);
  });
  it('Should render no images when no images was passed', () => {
    const { queryAllByTestId } = render(
      <Carousel carouselImages={[]} onScroll={onScrollMock} />
    );

    expect(queryAllByTestId('view').length).toBe(0);
  });
});
