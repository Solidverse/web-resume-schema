export interface Toast {
  /** Unique ID of toast */
  id: number;
  /** Type of toast */
  type: 'info' | 'success' | 'warning' | 'error';
  /** Time in seconds a toast is shown
   *
   * *Default: ***10****
   */
  showTimeSeconds?: number;
  /** Automatically close when timer runs out. If false, toast will need to be closed manually.
   *
   * *Default: ***true****
   */
  autoClose?: boolean;
  /** Hide the progress bar
   *
   * *Default: ***false****
   */
  hideProgressBar?: boolean;
  /** Hide close button
   *
   * *Default: ***false****
   */
  hideCloseButton?: boolean;

  /**
   * Pause on hover
   *
   * *Default: ***true****
   */
  pauseOnHover?: boolean;
  /** Pause on window focus loss
   *
   * *Default: ***true****
   */
  pauseOnWindowFocusLoss?: boolean;
  /** Pause on window focus
   *
   * *Default: ***true****
   */
  pauseOnFocus?: boolean;
  /** Message of the toast */
  message: string;
}
