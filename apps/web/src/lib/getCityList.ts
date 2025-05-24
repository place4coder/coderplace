import fs from 'fs';
import path from 'path';

export type CityEntry = {
  country: string;
  city: string;
};

export const getAllCityList = (): CityEntry[] => {
  const docsPath = path.resolve(process.cwd(), '../../docs');

  if (!fs.existsSync(docsPath)) {
    throw new Error(`Cannot find 'docs' directory at path: ${docsPath}`);
  }

  const result: CityEntry[] = [];

  const countryDirs = fs
    .readdirSync(docsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const country of countryDirs) {
    const countryPath = path.join(docsPath, country);

    const cityDirs = fs
      .readdirSync(countryPath, { withFileTypes: true })
      .filter(dirent => {
        if (!dirent.isDirectory()) return false;
        const placeJsonPath = path.join(countryPath, dirent.name, 'place.json');
        return fs.existsSync(placeJsonPath);
      })
      .map(dirent => dirent.name);

    for (const city of cityDirs) {
      result.push({ country, city });
    }
  }

  return result;
};
