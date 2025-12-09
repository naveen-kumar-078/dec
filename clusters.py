import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

data = {
    'Annual Income': [15, 18, 20, 22, 25, 55, 58, 60, 62, 65, 95, 98, 100, 105, 110],
    'Spending Score': [80, 82, 79, 85, 87, 45, 50, 48, 52, 55, 15, 18, 20, 22, 25]
}

df = pd.DataFrame(data)

x =df[['Annual Income','Spending Score']]
scalar = StandardScaler()
x_scalar = scalar.fit_transform(x)

kmeans = KMeans(n_clusters=3,random_state=42)
kmeans.fit(x_scalar)

df['cluster']=kmeans.labels_

print("full data with cluters")
print(df)

print("\n cluster 0 data")
print(df[df['cluster']==0])


print("\n cluster 1 data")
print(df[df['cluster']==1])


print("\n clusters 2 data")
print(df[df['cluster']==2])


plt.scatter(df['Annual Income'], df['Spending Score'], c=df['cluster'])
plt.xlabel("Annual Income")
plt.ylabel("Spending Score")
plt.title("K-Means Clustering")
plt.show()




