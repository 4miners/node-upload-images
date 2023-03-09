import { NewFastpicORG } from '../src/services/newFastpicORG';

describe('new.fastpic.org', () => {
  let sampleImage =
    'https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png';

  it('should upload an image from a URL and return the URL of the uploaded image (filename is always random)', async () => {
    const service = new NewFastpicORG();

    const result = await service.uploadFromUrl(sampleImage);
    //"https://i121.fastpic.org/big/2023/0306/ce/6d6bedb8f33b62024fced36ba0785ace.png"
    expect(result.directLink).toMatch(
      /^https:\/\/.+?\.fastpic\.org\/big\/.+\.(jpe?g|png|gif)$/
    );
  });
});
