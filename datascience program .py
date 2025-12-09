import seaborn as sns
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import StandardScaler
import pandas as pd
tips = sns.load_dataset('tips')
numeric_cols = tips.select_dtypes(include='number').columns
scaler = MinMaxScaler()
tips_normalized = pd.DataFrame(scaler.fit_transform(tips[numeric_cols]),
columns=numeric_cols)
print(tips_normalized.head())
scalers = StandardScaler()
tips_standardized = pd.DataFrame(scalers.fit_transform(tips[numeric_cols]),
columns=numeric_cols)
print(tips_standardized.head())