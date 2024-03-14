import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IApi } from '../types/ApiType';

interface IInitialState {
  data: IApi | null;
  loading: boolean;
}

const metrageId =
  'metragexternalJ7wA7LcUy2NqJqhWXsPAiaJwqhrgDeTBG7008VCyRMMgtryOhGAbFRmrxJSlRyq9W7kNyQ0!ys2ii4bl5hjAeL/-PCUdQ?fbzfKXQMW7xRiWtypL6!8?rm8-N0Qmq!HLkP277QRkM4fML!krp9yV149c6mmAaLqpJb2Jp5e7fT5LF/!OUwfHvce83ipefQFm17tey1kCokfQYnM2qdZOluDIds6nsl5TbxNjIR8e4R3=?Hct8JQrIWoEmdE8kf2Kz0G8/ZYcYJH04lZf=cSMsITAgMHYu1DvDKJ==UbTgPCZRvdLQDd-uKl923rt-uy2??V9RveTSN=xnWCpf-WTKDG8kFFEwYhzTjYTWKMda64Zss-Fm0lvvtNwCXdKPNMyEABmsyL0D1QEZpPAthR78qdX=54!-Q!y2b9yDFx/IS7TrHnAJk=z3iV52IGhC-AW9iL7PRpEQkzmJqNXSTTk97rO1oUMZf!Nxl?Z?y4M7gml9EjtA4FkepChybQ-UJWSauS-GSJ2yMP2AWcmziyw9IneCdO?LWPiVQ8ALKuqa3Zi8fWowuVnaW7WRR7zAZ38FBc8u2Mxe3iLxR0/!/zSi26HJBrS9y!EsJOxgcwcZS7PBsnlB3oOW27hW0n0zpFZrOZzSE4XOl/ykFpnnLBQav8E2O-8pWd5CxGyKcz!/TOu!7Ruwu1!Qta9bxm1BDlgLXqF!UTvfiOgqXYJLvsRrTCjQcRQ1VReqzDdPjxFW7HSmhgD!v?qT9zqM=pT9aWTFm5kLAWn9bARksh3woCUS4imarm7lny8cdHHm?aO9BwXMw4M5b1iBwWQNd?FgEweQ/HV0ntkjlnLGq3ZhSfQo5!pwNynvitFeBX?G8a8RFjG/hkdojkCl-KCo4rKU7HzGOS4huDXjzZOzlJ0uFz2umopAmgJn3AXtFQekpEloy7NxxsSocIDNEUh=x6yLyl=KwhQbJZ9fxwvzo2E-7iFd!-f3w23Lr69WEH0CfIVK1YhegvX8d';
const method = 'external.presentation.get';

export const getPreviewList = createAsyncThunk<IApi>(
  'preview/getPreviewList',
  async () => {
    const res = await axios.get(
      `https://crm.metragegroup.com/API/exPoint.php?metrage_id=${metrageId}&method=${method}&UID=${id}`
    );
    if (res?.statusText === 'OK') {
      const data = res?.data?.result || {};
      return data;
    }
    return {};
  }
);
const initialState: IInitialState = {
  data: null,
  loading: true,
};

export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    // toggleButton: (state, action: PayloadAction<string>) => {
    //   state.onButton = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getPreviewList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});

export const {} = previewSlice.actions;
export default previewSlice.reducer;
