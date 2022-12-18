const system = 'solarSystem';

export function getSystemInfo(dispatch: any) {
  dispatch({ type: 'systemInfo', payload: system });
}
