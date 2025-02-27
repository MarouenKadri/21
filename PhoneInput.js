import React, { useState } from 'react';
import { TextField, InputAdornment, MenuItem, Select } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('612345678');
  const [searchQuery, setSearchQuery] = useState('');

  // Récupérer la liste des pays avec drapeaux
  const countries = getCountries().map((code) => ({
    name: new Intl.DisplayNames(['en'], { type: 'region' }).of(code),
    code: `+${getCountryCallingCode(code)}`,
    isoCode: code.toLowerCase(), // Pour récupérer l'image du drapeau
  }));

  // Définir le pays par défaut (France)
  const defaultCountry = countries.find((c) => c.isoCode === 'fr') || countries[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  // Filtrer les pays selon la recherche
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <TextField
      label="Numéro de téléphone"
      variant="outlined"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select
              value={selectedCountry.isoCode}
              onChange={(e) => {
                const country = countries.find((c) => c.isoCode === e.target.value);
                if (country) setSelectedCountry(country);
              }}
              sx={{ minWidth: 100, display: 'flex', alignItems: 'center' }}
              variant="standard"
              disableUnderline
              onOpen={() => setSearchQuery('')} // Reset la recherche lors de l'ouverture
              renderValue={() => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={`https://flagcdn.com/w40/${selectedCountry.isoCode}.png`}
                    alt={selectedCountry.name}
                    style={{ width: 24, height: 16, marginRight: 8 }}
                  />
                  {selectedCountry.code}
                </div>
              )}
            >
              {/* Champ de recherche */}
              <MenuItem disableRipple>
                <TextField
                  placeholder="Rechercher un pays..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  fullWidth
                  autoFocus
                />
              </MenuItem>

              {/* Liste filtrée des pays */}
              {filteredCountries.map((country) => (
                <MenuItem key={country.isoCode} value={country.isoCode}>
                  <img
                    src={`https://flagcdn.com/w40/${country.isoCode}.png`}
                    alt={country.name}
                    style={{ width: 24, height: 16, marginRight: 8 }}
                  />
                  {country.name} ({country.code})
                </MenuItem>
              ))}
            </Select>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Edit sx={{ color: 'action.active', cursor: 'pointer' }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PhoneInput;
