import { FacultiesModule } from './faculties.module';

describe('FacultiesModule', () => {
  let facultiesModule: FacultiesModule;

  beforeEach(() => {
    facultiesModule = new FacultiesModule();
  });

  it('should create an instance', () => {
    expect(facultiesModule).toBeTruthy();
  });
});
