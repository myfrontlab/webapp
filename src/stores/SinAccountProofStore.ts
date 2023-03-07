import { observable, action, reaction, makeAutoObservable } from "mobx";
import { createContext } from "react";
import { client } from "./client";

export interface SinAccountProof {
  id?: string;
  title: string;
  description: string;
  url: string;
  updated_on: string;
}

class SinAccountProofStore {
  constructor() {
    // reaction( () => this.sinaccountproofs, (_) => console.log(this.sinaccountproofs.length));
    makeAutoObservable(this);
  }

  @observable
  sinaccountproofs: SinAccountProof[] = [];

  @observable
  sinaccountproof: SinAccountProof | null = null;

  @observable
  loading: boolean = true;

  @action
  loadSinAccountProofs = async () => {
    this.loading = true;
    const response = await client.get("/public/sinaccountproofs");
    this.sinaccountproofs = response.data;
    this.loading = false;
  };

  @action
  loadNextSinAccountProof = async (updated_on: string) => {
    this.loading = true;
    const response = await client.get("/public/sinaccountproof", {
      params: {
        sin_account_proof_updated_on: updated_on,
      },
    });
    this.sinaccountproof = response.data;
    this.loading = false;
  };

  @action
  addSinAccountProof = (sinaccountproof: SinAccountProof) => {
    this.sinaccountproofs.push({ ...sinaccountproof });
  };

  @action
  removeSinAccountProof = (id: string) => {
    this.sinaccountproofs = this.sinaccountproofs.filter(
      (sinaccountproof) => sinaccountproof.id !== id
    );
  };
}

export default createContext(new SinAccountProofStore());
