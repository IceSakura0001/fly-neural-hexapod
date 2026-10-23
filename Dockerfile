FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/neural-requirements.txt /app/neural-requirements.txt
RUN pip install --no-cache-dir -r neural-requirements.txt
COPY backend /app/backend
COPY frontend/dist /app/static
COPY models/nbs_hexapod_v5 /app/models/nbs_hexapod_v5
COPY models/malecns_v1 /app/models/malecns_v1
COPY tests /app/tests
RUN mkdir -p /app/data && chown 10001:10001 /app/data
ENV MODEL_DIR=/app/models/nbs_hexapod_v5 STATIC_DIR=/app/static NEURAL_DATA_DIR=/app/models/malecns_v1 NUMBA_CACHE_DIR=/tmp/numba OPENBLAS_NUM_THREADS=1
USER 10001:10001
EXPOSE 8000
CMD ["uvicorn", "backend.app:app", "--host", "0.0.0.0", "--port", "8000", "--no-access-log"]
