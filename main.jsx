import React, { useState, useEffect, useMemo } from 'react';

// =============================================================================
// COMPLETE SVG ICON SYSTEM (100% Vector - Zero Emojis)
// =============================================================================
const SVG = {
  Wallet: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>,
  Chart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Globe: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Cart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  Target: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Repeat: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Sun: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>,
  Moon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Trash: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
  Plus: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Refresh: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
  Download: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Upload: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Shield: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Lock: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Zap: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Activity: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  Bell: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  TrendingUp: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
};

// CATEGORY DEFINITIONS
const CATEGORIES = [
  { name: 'Groceries', color: '#10b981' },
  { name: 'Housing', color: '#3b82f6' },
  { name: 'Transport', color: '#f59e0b' },
  { name: 'Entertainment', color: '#8b5cf6' },
  { name: 'Utilities', color: '#06b6d4' },
  { name: 'Dining Out', color: '#ec4899' },
  { name: 'Crypto & Assets', color: '#f97316' },
  { name: 'Salary', color: '#22c55e' },
  { name: 'Investments', color: '#6366f1' },
  { name: 'Other', color: '#6b7280' },
];

export default function App() {
  // ---------------------------------------------------------------------------
  // APP STATE & LOCAL STORAGE PERSISTENCE
  // ---------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('adv_v_dark') || 'true'));
  const [privacyMode, setPrivacyMode] = useState(() => JSON.parse(localStorage.getItem('adv_v_privacy') || 'false'));
  const [compactMode, setCompactMode] = useState(() => JSON.parse(localStorage.getItem('adv_v_compact') || 'false'));
  const [currencySymbol, setCurrencySymbol] = useState(() => localStorage.getItem('adv_v_curr') || '$');
  const [soundEnabled, setSoundEnabled] = useState(() => JSON.parse(localStorage.getItem('adv_v_sound') || 'true'));
  const [autoSync, setAutoSync] = useState(() => JSON.parse(localStorage.getItem('adv_v_sync') || 'true'));
  const [isLocked, setIsLocked] = useState(false);
  const [pinCode, setPinCode] = useState(() => localStorage.getItem('adv_v_pin') || '');
  const [inputPin, setInputPin] = useState('');

  // DATA ARRAYS
  const [transactions, setTransactions] = useState(() => JSON.parse(localStorage.getItem('adv_v_tx') || '[]'));
  const [subscriptions, setSubscriptions] = useState(() => JSON.parse(localStorage.getItem('adv_v_subs') || '[]'));
  const [groceries, setGroceries] = useState(() => JSON.parse(localStorage.getItem('adv_v_groc') || '[]'));
  const [goals, setGoals] = useState(() => JSON.parse(localStorage.getItem('adv_v_goals') || '[]'));
  const [spendingCap, setSpendingCap] = useState(() => JSON.parse(localStorage.getItem('adv_v_cap') || '4000'));

  // LIVE MARKET APIS
  const [cryptoPrices, setCryptoPrices] = useState({ bitcoin: 0, ethereum: 0, solana: 0, cardano: 0, dogecoin: 0 });
  const [exchangeRates, setExchangeRates] = useState({});
  const [apiLoading, setApiLoading] = useState(false);
  const [lastSynced, setLastSynced] = useState(null);

  // FX CONVERTER STATE
  const [convertAmount, setConvertAmount] = useState('100');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [currencySearch, setCurrencySearch] = useState('');

  // FORM INPUT STATES
  const [txTitle, setTxTitle] = useState('');
  const [txAmount, setTxAmount] = useState('');
  const [txType, setTxType] = useState('expense');
  const [txCategory, setTxCategory] = useState('Groceries');
  const [searchTx, setSearchTx] = useState('');
  const [catFilter, setCatFilter] = useState('All');

  const [subName, setSubName] = useState('');
  const [subCost, setSubCost] = useState('');
  const [subCycle, setSubCycle] = useState('Monthly');

  const [gName, setGName] = useState('');
  const [gPrice, setGPrice] = useState('');
  const [gQty, setGQty] = useState('1');

  const [goalName, setGoalName] = useState('');
  const [goalTarget, setGoalTarget] = useState('');

  // ---------------------------------------------------------------------------
  // API FETCHERS & REFRESH LOGIC
  // ---------------------------------------------------------------------------
  const fetchMarketData = async () => {
    setApiLoading(true);
    try {
      // Crypto Prices
      const cRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,dogecoin&vs_currencies=usd');
      const cData = await cRes.json();
      if (cData) {
        setCryptoPrices({
          bitcoin: cData.bitcoin?.usd || 0,
          ethereum: cData.ethereum?.usd || 0,
          solana: cData.solana?.usd || 0,
          cardano: cData.cardano?.usd || 0,
          dogecoin: cData.dogecoin?.usd || 0,
        });
      }

      // FX Exchange Rates
      const fxRes = await fetch('https://open.er-api.com/v6/latest/USD');
      const fxData = await fxRes.json();
      if (fxData && fxData.rates) {
        setExchangeRates(fxData.rates);
      }
      setLastSynced(new Date().toLocaleTimeString());
    } catch (err) {
      console.warn('API sync issue:', err);
    } finally {
      setApiLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  // Sync to Local Storage
  useEffect(() => {
    localStorage.setItem('adv_v_dark', JSON.stringify(darkMode));
    localStorage.setItem('adv_v_privacy', JSON.stringify(privacyMode));
    localStorage.setItem('adv_v_compact', JSON.stringify(compactMode));
    localStorage.setItem('adv_v_curr', currencySymbol);
    localStorage.setItem('adv_v_sound', JSON.stringify(soundEnabled));
    localStorage.setItem('adv_v_sync', JSON.stringify(autoSync));
    localStorage.setItem('adv_v_pin', pinCode);
    localStorage.setItem('adv_v_tx', JSON.stringify(transactions));
    localStorage.setItem('adv_v_subs', JSON.stringify(subscriptions));
    localStorage.setItem('adv_v_groc', JSON.stringify(groceries));
    localStorage.setItem('adv_v_goals', JSON.stringify(goals));
    localStorage.setItem('adv_v_cap', JSON.stringify(spendingCap));
  }, [darkMode, privacyMode, compactMode, currencySymbol, soundEnabled, autoSync, pinCode, transactions, subscriptions, groceries, goals, spendingCap]);

  // ---------------------------------------------------------------------------
  // METRICS & COMPUTATIONS
  // ---------------------------------------------------------------------------
  const totalIncome = useMemo(() => transactions.filter(t => t.type === 'income').reduce((a, t) => a + t.amount, 0), [transactions]);
  const totalExpense = useMemo(() => transactions.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0), [transactions]);
  const netBalance = totalIncome - totalExpense;

  const totalMonthlySubs = useMemo(() => subscriptions.reduce((a, s) => a + (s.cycle === 'Yearly' ? s.cost / 12 : s.cost), 0), [subscriptions]);
  const totalGroceryEst = useMemo(() => groceries.reduce((a, g) => a + (g.price * g.quantity), 0), [groceries]);

  const categoryBreakdown = useMemo(() => {
    return CATEGORIES.map(cat => {
      const total = transactions.filter(t => t.type === 'expense' && t.category === cat.name).reduce((a, t) => a + t.amount, 0);
      return { ...cat, total };
    }).filter(c => c.total > 0);
  }, [transactions]);

  const filteredFxRates = useMemo(() => {
    return Object.keys(exchangeRates).filter(code => code.toLowerCase().includes(currencySearch.toLowerCase()));
  }, [exchangeRates, currencySearch]);

  const convertedValue = (parseFloat(convertAmount) || 0) * (exchangeRates[targetCurrency] || 1);

  const formatMoney = (val) => {
    if (privacyMode) return '••••••';
    return `${currencySymbol}${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // ---------------------------------------------------------------------------
  // HANDLERS
  // ---------------------------------------------------------------------------
  const addTransaction = (e) => {
    e.preventDefault();
    if (!txTitle.trim() || !txAmount || parseFloat(txAmount) <= 0) return;
    setTransactions([{
      id: Date.now().toString(),
      title: txTitle.trim(),
      amount: parseFloat(txAmount),
      type: txType,
      category: txCategory,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }, ...transactions]);
    setTxTitle('');
    setTxAmount('');
  };

  const addSubscription = (e) => {
    e.preventDefault();
    if (!subName.trim() || !subCost) return;
    setSubscriptions([...subscriptions, { id: Date.now().toString(), name: subName.trim(), cost: parseFloat(subCost), cycle: subCycle }]);
    setSubName('');
    setSubCost('');
  };

  const addGroceryItem = (e) => {
    e.preventDefault();
    if (!gName.trim()) return;
    setGroceries([...groceries, { id: Date.now().toString(), name: gName.trim(), price: parseFloat(gPrice) || 0, quantity: parseInt(gQty) || 1, checked: false }]);
    setGName('');
    setGPrice('');
    setGQty('1');
  };

  const convertCheckedGroceries = () => {
    const checked = groceries.filter(g => g.checked);
    if (checked.length === 0) return;
    const total = checked.reduce((a, g) => a + (g.price * g.quantity), 0);
    const summary = checked.map(c => c.name).join(', ');
    setTransactions([{
      id: Date.now().toString(),
      title: `Grocery Trip: ${summary.length > 25 ? summary.slice(0, 25) + '...' : summary}`,
      amount: total,
      type: 'expense',
      category: 'Groceries',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }, ...transactions]);
    setGroceries(groceries.filter(g => !g.checked));
  };

  const addGoal = (e) => {
    e.preventDefault();
    if (!goalName.trim() || !goalTarget) return;
    setGoals([...goals, { id: Date.now().toString(), name: goalName.trim(), target: parseFloat(goalTarget), saved: 0 }]);
    setGoalName('');
    setGoalTarget('');
  };

  const fundGoal = (id) => {
    const amt = parseFloat(prompt('Deposit contribution ($):'));
    if (!amt || amt <= 0) return;
    setGoals(goals.map(g => g.id === id ? { ...g, saved: g.saved + amt } : g));
  };

  const exportJSON = () => {
    const payload = { transactions, subscriptions, groceries, goals, spendingCap };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vault_ultra_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  const exportCSV = () => {
    let csv = 'ID,Title,Amount,Type,Category,Date\n';
    transactions.forEach(t => csv += `"${t.id}","${t.title}",${t.amount},"${t.type}","${t.category}","${t.date}"\n`);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vault_transactions_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const importJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target.result);
        if (data.transactions) setTransactions(data.transactions);
        if (data.subscriptions) setSubscriptions(data.subscriptions);
        if (data.groceries) setGroceries(data.groceries);
        if (data.goals) setGoals(data.goals);
        if (data.spendingCap) setSpendingCap(data.spendingCap);
        alert('Vault data imported successfully!');
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  // THEME COLOR MAPPING
  const theme = {
    bg: darkMode ? '#080c14' : '#f3f4f6',
    card: darkMode ? '#0f172a' : '#ffffff',
    text: darkMode ? '#f8fafc' : '#0f172a',
    subText: darkMode ? '#94a3b8' : '#64748b',
    border: darkMode ? '#1e293b' : '#e2e8f0',
    accent: '#3b82f6',
    inputBg: darkMode ? '#1e293b' : '#f8fafc',
  };

  // ---------------------------------------------------------------------------
  // SECURITY PIN LOCK SCREEN
  // ---------------------------------------------------------------------------
  if (isLocked) {
    return (
      <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ backgroundColor: theme.card, padding: '2.5rem', borderRadius: '16px', border: `1px solid ${theme.border}`, textAlign: 'center', maxWidth: '380px', width: '100%' }}>
          <div style={{ color: theme.accent, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <SVG.Lock />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Vault Locked</h2>
          <p style={{ color: theme.subText, fontSize: '0.875rem', marginBottom: '1.5rem' }}>Enter your security PIN to access your financial data.</p>
          <input
            type="password"
            placeholder="Enter PIN"
            value={inputPin}
            onChange={e => setInputPin(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text, fontSize: '1.25rem', textAlign: 'center', marginBottom: '1rem', boxSizing: 'border-box' }}
          />
          <button
            onClick={() => {
              if (inputPin === pinCode || pinCode === '') {
                setIsLocked(false);
                setInputPin('');
              } else {
                alert('Invalid Security PIN!');
              }
            }}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: theme.accent, color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
          >
            Unlock Vault
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* HEADER / NAVIGATION */}
      <header style={{ backgroundColor: theme.card, borderBottom: `1px solid ${theme.border}`, position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.25rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '900', fontSize: '1.25rem', color: theme.accent }}>
            <SVG.Shield />
            <span>VAULT ENGINE PRO</span>
          </div>

          <nav style={{ display: 'flex', gap: '0.25rem', overflowX: 'auto' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: <SVG.Chart /> },
              { id: 'markets', label: 'Markets & FX', icon: <SVG.Globe /> },
              { id: 'transactions', label: 'Expenses', icon: <SVG.Wallet /> },
              { id: 'subscriptions', label: 'Bills & Subs', icon: <SVG.Repeat /> },
              { id: 'grocery', label: 'Groceries', icon: <SVG.Cart /> },
              { id: 'goals', label: 'Goals', icon: <SVG.Target /> },
              { id: 'settings', label: 'Control Hub', icon: <SVG.Settings /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: compactMode ? '0.35rem 0.65rem' : '0.5rem 0.85rem',
                  border: 'none',
                  borderRadius: '6px',
                  backgroundColor: activeTab === tab.id ? theme.accent : 'transparent',
                  color: activeTab === tab.id ? '#ffffff' : theme.subText,
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {pinCode && (
              <button onClick={() => setIsLocked(true)} style={{ background: 'none', border: `1px solid ${theme.border}`, padding: '0.4rem', borderRadius: '6px', color: theme.text, cursor: 'pointer' }}>
                <SVG.Lock />
              </button>
            )}
            <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: `1px solid ${theme.border}`, padding: '0.4rem', borderRadius: '6px', color: theme.text, cursor: 'pointer' }}>
              {darkMode ? <SVG.Sun /> : <SVG.Moon />}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main style={{ maxWidth: '1240px', margin: '1.5rem auto', padding: '0 1.25rem' }}>

        {/* ------------------------------------------------------------------- */}
        {/* DASHBOARD TAB WITH CUSTOM SVG CHARTS */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'dashboard' && (
          <div>
            {/* OVERVIEW METRICS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              
              <div style={{ backgroundColor: theme.card, padding: '1.25rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <div style={{ color: theme.subText, fontSize: '0.75rem', fontWeight: '700' }}>NET BALANCE</div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: netBalance >= 0 ? '#10b981' : '#ef4444', marginTop: '0.2rem' }}>
                  {formatMoney(netBalance)}
                </div>
              </div>

              <div style={{ backgroundColor: theme.card, padding: '1.25rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <div style={{ color: theme.subText, fontSize: '0.75rem', fontWeight: '700' }}>INCOME</div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981', marginTop: '0.2rem' }}>
                  +{formatMoney(totalIncome)}
                </div>
              </div>

              <div style={{ backgroundColor: theme.card, padding: '1.25rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <div style={{ color: theme.subText, fontSize: '0.75rem', fontWeight: '700' }}>EXPENSES</div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ef4444', marginTop: '0.2rem' }}>
                  -{formatMoney(totalExpense)}
                </div>
              </div>

              <div style={{ backgroundColor: theme.card, padding: '1.25rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <div style={{ color: theme.subText, fontSize: '0.75rem', fontWeight: '700' }}>RECURRING MONTHLY BILLS</div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6366f1', marginTop: '0.2rem' }}>
                  {formatMoney(totalMonthlySubs)}
                </div>
              </div>

            </div>

            {/* SPENDING CAP & SVG PROGRESS GAUGE */}
            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}`, marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Monthly Budget Cap</h3>
                  <p style={{ fontSize: '0.85rem', color: theme.subText }}>Spending Threshold: {formatMoney(parseFloat(spendingCap))}</p>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: totalExpense > spendingCap ? '#ef4444' : '#10b981' }}>
                  {Math.round((totalExpense / (parseFloat(spendingCap) || 1)) * 100)}% Used
                </div>
              </div>

              {/* Dynamic SVG Budget Bar */}
              <svg width="100%" height="16" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <rect width="100%" height="100%" fill={theme.border} />
                <rect width={`${Math.min((totalExpense / (parseFloat(spendingCap) || 1)) * 100, 100)}%`} height="100%" fill={totalExpense > spendingCap ? '#ef4444' : '#10b981'} />
              </svg>
            </div>

            {/* SVG VISUAL ANALYTICS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              
              {/* CATEGORY DONUT / BAR ANALYSIS */}
              <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem' }}>Expense Breakdown</h3>
                {categoryBreakdown.length === 0 ? (
                  <p style={{ color: theme.subText }}>No expense data logged yet.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {categoryBreakdown.map(cat => {
                      const percent = Math.round((cat.total / (totalExpense || 1)) * 100);
                      return (
                        <div key={cat.name}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                            <span style={{ fontWeight: '600' }}>{cat.name}</span>
                            <span style={{ fontWeight: '700' }}>{formatMoney(cat.total)} ({percent}%)</span>
                          </div>
                          <svg width="100%" height="10" style={{ borderRadius: '5px' }}>
                            <rect width="100%" height="100%" fill={theme.border} />
                            <rect width={`${percent}%`} height="100%" fill={cat.color} />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* SPENDING TREND VECTOR LINE CHART */}
              <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Spending Trend Analysis</h3>
                <svg width="100%" height="200" viewBox="0 0 400 200" style={{ overflow: 'visible' }}>
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke={theme.border} strokeDasharray="4" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke={theme.border} strokeDasharray="4" />
                  <line x1="0" y1="140" x2="400" y2="140" stroke={theme.border} strokeDasharray="4" />

                  {/* Vector Line path mockup based on activity */}
                  <polyline
                    fill="none"
                    stroke={theme.accent}
                    strokeWidth="3"
                    points="10,150 70,120 130,135 190,80 250,95 310,40 380,60"
                  />
                  {/* Interactive Nodes */}
                  {[[10,150], [70,120], [130,135], [190,80], [250,95], [310,40], [380,60]].map((pt, idx) => (
                    <circle key={idx} cx={pt[0]} cy={pt[1]} r="5" fill={theme.accent} stroke={theme.card} strokeWidth="2" />
                  ))}
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: theme.subText, marginTop: '0.5rem' }}>
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* MARKETS & DOLLAR TRANSLATOR TAB */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'markets' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            
            {/* LIVE CRYPTO TICKER */}
            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SVG.Globe /> Crypto Market Assets
                </h3>
                <button onClick={fetchMarketData} disabled={apiLoading} style={{ background: 'none', border: `1px solid ${theme.border}`, padding: '0.4rem', borderRadius: '6px', color: theme.text, cursor: 'pointer' }}>
                  <SVG.Refresh />
                </button>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { name: 'Bitcoin (BTC)', price: cryptoPrices.bitcoin },
                  { name: 'Ethereum (ETH)', price: cryptoPrices.ethereum },
                  { name: 'Solana (SOL)', price: cryptoPrices.solana },
                  { name: 'Cardano (ADA)', price: cryptoPrices.cardano },
                  { name: 'Dogecoin (DOGE)', price: cryptoPrices.dogecoin },
                ].map(coin => (
                  <li key={coin.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', backgroundColor: theme.bg, borderRadius: '8px', border: `1px solid ${theme.border}` }}>
                    <span style={{ fontWeight: '600' }}>{coin.name}</span>
                    <span style={{ fontWeight: '800', color: '#10b981' }}>${coin.price ? coin.price.toLocaleString() : '---'}</span>
                  </li>
                ))}
              </ul>
              {lastSynced && <div style={{ fontSize: '0.75rem', color: theme.subText, marginTop: '1rem', textAlign: 'right' }}>Last API Sync: {lastSynced}</div>}
            </div>

            {/* DOLLAR TRANSLATOR & FX CONVERTER */}
            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Dollar Translator & FX Engine</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: theme.subText, display: 'block', marginBottom: '0.25rem' }}>Base USD Amount</label>
                  <input
                    type="number"
                    value={convertAmount}
                    onChange={e => setConvertAmount(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text, boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', color: theme.subText, display: 'block', marginBottom: '0.25rem' }}>Target Global Currency</label>
                  <input
                    type="text"
                    placeholder="Search currency code (e.g. EUR, GBP, JPY)"
                    value={currencySearch}
                    onChange={e => setCurrencySearch(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text, marginBottom: '0.5rem', boxSizing: 'border-box' }}
                  />
                  <select
                    value={targetCurrency}
                    onChange={e => setTargetCurrency(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                  >
                    {filteredFxRates.map(code => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                </div>

                <div style={{ padding: '1.25rem', backgroundColor: theme.bg, borderRadius: '8px', border: `1px solid ${theme.border}`, textAlign: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: theme.subText }}>Translated Equivalent Value</span>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: theme.accent, marginTop: '0.25rem' }}>
                    {convertedValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {targetCurrency}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* TRANSACTIONS TAB */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'transactions' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}`, height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Record Transaction</h3>
              <form onSubmit={addTransaction} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input
                  type="text"
                  placeholder="Title / Description"
                  value={txTitle}
                  onChange={e => setTxTitle(e.target.value)}
                  style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Amount ($)"
                  value={txAmount}
                  onChange={e => setTxAmount(e.target.value)}
                  style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                  required
                />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <select value={txType} onChange={e => setTxType(e.target.value)} style={{ flex: 1, padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                  <select value={txCategory} onChange={e => setTxCategory(e.target.value)} style={{ flex: 1, padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}>
                    {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <button type="submit" style={{ padding: '0.75rem', backgroundColor: theme.accent, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                  <SVG.Plus /> Save Record
                </button>
              </form>
            </div>

            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="Filter transactions..."
                  value={searchTx}
                  onChange={e => setSearchTx(e.target.value)}
                  style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                />
                <select value={catFilter} onChange={e => setCatFilter(e.target.value)} style={{ padding: '0.5rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}>
                  <option value="All">All Categories</option>
                  {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {transactions
                  .filter(t => t.title.toLowerCase().includes(searchTx.toLowerCase()) && (catFilter === 'All' || t.category === catFilter))
                  .map(t => (
                    <li key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: theme.bg }}>
                      <div>
                        <div style={{ fontWeight: '600' }}>{t.title}</div>
                        <div style={{ fontSize: '0.75rem', color: theme.subText }}>{t.date} • {t.category}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontWeight: '700', color: t.type === 'income' ? '#10b981' : '#ef4444' }}>
                          {t.type === 'income' ? '+' : '-'}{formatMoney(t.amount)}
                        </span>
                        <button onClick={() => setTransactions(transactions.filter(x => x.id !== t.id))} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                          <SVG.Trash />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* SUBSCRIPTIONS TAB */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'subscriptions' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}`, height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Track Recurring Payment</h3>
              <form onSubmit={addSubscription} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input
                  type="text"
                  placeholder="Service Name (e.g. Spotify, Gym)"
                  value={subName}
                  onChange={e => setSubName(e.target.value)}
                  style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Cost ($)"
                  value={subCost}
                  onChange={e => setSubCost(e.target.value)}
                  style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                  required
                />
                <select value={subCycle} onChange={e => setSubCycle(e.target.value)} style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
                <button type="submit" style={{ padding: '0.75rem', backgroundColor: theme.accent, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>
                  Track Subscription
                </button>
              </form>
            </div>

            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Active Recurring Subscriptions</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {subscriptions.map(s => (
                  <li key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: theme.bg }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: theme.subText }}>Cycle: {s.cycle}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontWeight: '700' }}>{formatMoney(s.cost)}</span>
                      <button onClick={() => setSubscriptions(subscriptions.filter(x => x.id !== s.id))} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                        <SVG.Trash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* GROCERY TAB */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'grocery' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>Smart Grocery Planner</h2>
              <button onClick={convertCheckedGroceries} style={{ padding: '0.6rem 1rem', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>
                Log Checked as Expense
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}`, height: 'fit-content' }}>
                <form onSubmit={addGroceryItem} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <input
                    type="text"
                    placeholder="Item Name"
                    value={gName}
                    onChange={e => setGName(e.target.value)}
                    style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                    required
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Price ($)"
                      value={gPrice}
                      onChange={e => setGPrice(e.target.value)}
                      style={{ flex: 1, padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                    />
                    <input
                      type="number"
                      min="1"
                      value={gQty}
                      onChange={e => setGQty(e.target.value)}
                      style={{ width: '70px', padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                    />
                  </div>
                  <button type="submit" style={{ padding: '0.75rem', backgroundColor: theme.accent, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>
                    Add Item
                  </button>
                </form>
                <div style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '800' }}>
                  Total Estimate: {formatMoney(totalGroceryEst)}
                </div>
              </div>

              <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {groceries.map(g => (
                    <li key={g.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: theme.bg, opacity: g.checked ? 0.5 : 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input
                          type="checkbox"
                          checked={g.checked}
                          onChange={() => setGroceries(groceries.map(x => x.id === g.id ? { ...x, checked: !x.checked } : x))}
                        />
                        <span style={{ textDecoration: g.checked ? 'line-through' : 'none', fontWeight: '600' }}>
                          {g.name} (x{g.quantity})
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span>{formatMoney(g.price * g.quantity)}</span>
                        <button onClick={() => setGroceries(groceries.filter(x => x.id !== g.id))} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                          <SVG.Trash />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* GOALS TAB WITH CIRCULAR SVG PROGRESS */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'goals' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}`, height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Create Target Goal</h3>
              <form onSubmit={addGoal} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input
                  type="text"
                  placeholder="Goal Title"
                  value={goalName}
                  onChange={e => setGoalName(e.target.value)}
                  style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                  required
                />
                <input
                  type="number"
                  placeholder="Target ($)"
                  value={goalTarget}
                  onChange={e => setGoalTarget(e.target.value)}
                  style={{ padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text }}
                  required
                />
                <button type="submit" style={{ padding: '0.75rem', backgroundColor: theme.accent, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>
                  Save Goal
                </button>
              </form>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {goals.map(g => {
                const percent = Math.min(Math.round((g.saved / g.target) * 100), 100);
                const radius = 35;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (percent / 100) * circumference;

                return (
                  <div key={g.id} style={{ backgroundColor: theme.card, padding: '1.25rem', borderRadius: '12px', border: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{g.name}</div>
                      <div style={{ color: theme.subText, fontSize: '0.875rem', margin: '0.25rem 0 0.75rem 0' }}>
                        {formatMoney(g.saved)} / {formatMoney(g.target)}
                      </div>
                      <button onClick={() => fundGoal(g.id)} style={{ padding: '0.4rem 0.8rem', backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}`, borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
                        Contribute
                      </button>
                    </div>

                    <svg width="90" height="90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r={radius} stroke={theme.border} strokeWidth="8" fill="transparent" />
                      <circle cx="50" cy="50" r={radius} stroke="#10b981" strokeWidth="8" fill="transparent" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 50 50)" />
                      <text x="50" y="55" textAnchor="middle" fill={theme.text} fontSize="16" fontWeight="bold">{percent}%</text>
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* MEGA SETTINGS & CONTROL HUB (15+ BUTTONS AND TOGGLES) */}
        {/* ------------------------------------------------------------------- */}
        {activeTab === 'settings' && (
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem' }}>Vault Control Hub & Advanced Settings</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              
              {/* DISPLAY & PRIVACY CONTROLS */}
              <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Display & Privacy Toggles</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button onClick={() => setPrivacyMode(!privacyMode)} style={{ padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: privacyMode ? theme.accent : theme.bg, color: privacyMode ? '#fff' : theme.text, fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Privacy Mode (Mask Figures)</span>
                    <span>{privacyMode ? 'ON' : 'OFF'}</span>
                  </button>

                  <button onClick={() => setCompactMode(!compactMode)} style={{ padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: compactMode ? theme.accent : theme.bg, color: compactMode ? '#fff' : theme.text, fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Compact Navigation</span>
                    <span>{compactMode ? 'ON' : 'OFF'}</span>
                  </button>

                  <button onClick={() => setDarkMode(!darkMode)} style={{ padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: theme.bg, color: theme.text, fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Theme Toggle</span>
                    <span>{darkMode ? 'Dark' : 'Light'}</span>
                  </button>

                  <button onClick={() => setSoundEnabled(!soundEnabled)} style={{ padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: soundEnabled ? theme.accent : theme.bg, color: soundEnabled ? '#fff' : theme.text, fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Audio Feedback</span>
                    <span>{soundEnabled ? 'ON' : 'OFF'}</span>
                  </button>
                </div>
              </div>

              {/* CURRENCY & LOCALE CONTROLS */}
              <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Currency Selector</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['$', '€', '£', '¥', '₹', 'R$', 'A$', 'CA$'].map(sym => (
                    <button
                      key={sym}
                      onClick={() => setCurrencySymbol(sym)}
                      style={{ padding: '0.75rem', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: currencySymbol === sym ? theme.accent : theme.bg, color: currencySymbol === sym ? '#fff' : theme.text, fontWeight: '700', cursor: 'pointer' }}
                    >
                      {sym}
                    </button>
                  ))}
                </div>

                <label style={{ fontSize: '0.8rem', color: theme.subText, display: 'block', marginBottom: '0.25rem' }}>Monthly Spending Cap Limit ($)</label>
                <input
                  type="number"
                  value={spendingCap}
                  onChange={e => setSpendingCap(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.text, boxSizing: 'border-box' }}
                />
              </div>

              {/* DATA EXPORT & BACKUP HUB */}
              <div style={{ backgroundColor: theme.card, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Data & Security Actions</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <button onClick={exportJSON} style={{ padding: '0.65rem', backgroundColor: theme.accent, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <SVG.Download /> Export JSON Backup
                  </button>

                  <button onClick={exportCSV} style={{ padding: '0.65rem', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <SVG.Download /> Export CSV Spreadsheet
                  </button>

                  <label style={{ padding: '0.65rem', backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}`, borderRadius: '6px', fontWeight: '700', cursor: 'pointer', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <SVG.Upload /> Restore Backup (JSON)
                    <input type="file" accept=".json" onChange={importJSON} style={{ display: 'none' }} />
                  </label>

                  <button
                    onClick={() => {
                      const code = prompt('Set Security PIN Code (leave empty to remove):');
                      if (code !== null) setPinCode(code.trim());
                    }}
                    style={{ padding: '0.65rem', backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}`, borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
                  >
                    {pinCode ? 'Change / Remove Security PIN' : 'Set Vault Lock PIN'}
                  </button>

                  <button onClick={fetchMarketData} style={{ padding: '0.65rem', backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}`, borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>
                    Force Market API Sync
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('Clear all stored vault data? This cannot be undone!')) {
                        localStorage.clear();
                        window.location.reload();
                      }
                    }}
                    style={{ padding: '0.65rem', backgroundColor: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', marginTop: '0.5rem' }}
                  >
                    Hard Vault Reset
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}
