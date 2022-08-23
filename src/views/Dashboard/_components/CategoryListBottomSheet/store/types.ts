export interface IBottomSheetState {
  controls: {
    status: null | 'success' | 'loading' | 'fail';
    visible: boolean;
  };
}

export interface IBottomSheetControlPayload {
  visible: boolean;
}
