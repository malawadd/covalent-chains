// pages/api/data.js
import { CovalentClient } from '@covalenthq/client-sdk';
export default async function handler(req, res) {
    const client = new CovalentClient(process.env.COVALENTAPI); // Use the non-public env variable
    try {
      const resp = await client.BaseService.getAllChains();
      const length = resp.data.items.length;
      res.status(200).json({ length });
    } catch (error) {
      console.error("API call error:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  